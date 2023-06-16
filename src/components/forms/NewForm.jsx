import InputFields from "../data/InputFieldsConfig";
import { useState } from "react";
import { useFormik } from "formik";
import React from "react";
import FieldsMap from "../data/FieldsMap";
import axios from "axios";

const NewForm = ({ spellData, initText, setinitText }) => {
  const [load, setload] = useState(false);

  let fieldsArr = [];
  let CustomInputFields = InputFields;
  if (
    FieldsMap[spellData.proj_category] &&
    FieldsMap[spellData.proj_category][spellData.spell_type]
  ) {
    fieldsArr = FieldsMap[spellData.proj_category][spellData.spell_type];
    if (fieldsArr.length > 0) {
      CustomInputFields = InputFields.filter((field) =>
        fieldsArr.includes(field.id)
      );
    }
  }
  console.log("Fields Arr: ", fieldsArr);
  console.log("Custom: ", CustomInputFields);

  const onSubmit = (values) => {
    setload(true);
    console.log("Values received: ", values);

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/prompts/test3`,
      data: {
        PurposeAndScope: values.PurposeAndScope,
        ProductDescription: values.ProductDescription,
        KeyUsers: values.KeyUsers,
        UserActions: values.UserActions,
      },
    })
      .then(function (res) {
        console.log("Api Response: ", res);
        const data = res.data.prd;
        let defStr =
          '<h2 style="text-align: center"> ' +
          spellData.proj_name +
          " - Product Requirements Document</h2><p><br></p>";
        data.forEach((el) => {
          defStr += el.text;
          defStr += "<p><br></p>";
        });
        console.log("defStr 2: ", defStr);

        axios({
          method: "post",
          url: `${process.env.NEXT_PUBLIC_HOST}/api/spells/updateResText`,
          data: {
            spellId: spellData._id,
            res_text: defStr,
          },
        })
          .then((res) => {
            console.log("New Res Text updated successfully");
          })
          .catch((err) => console.log("error occured: ", err));

        setinitText(defStr);
        setload(false);
      })
      .catch((err) => {
        setload(false);
        console.log("Error Occured: ", err);
      });

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/spells/saveInputs`,
      data: {
        spellId: spellData._id,
        inputs: JSON.stringify(values),
      },
    })
      .then((res) => {
        console.log("Inputs updated successfully");
      })
      .catch((err) => console.log("error occured in saving inputs: ", err));
  };
  const spellInputs = JSON.parse(spellData.inputs);
  console.log("Spell Inputs: ", spellInputs);

  const formik = useFormik({
    initialValues: spellInputs,
    onSubmit,
  });

  return (
    <form action="#" onSubmit={formik.handleSubmit}>
      <div>
        <div className="h-[65vh] overflow-y-scroll py-8 px-6 mx-auto max-w-screen-md">
          <div className="space-y-4 text-base">
            {CustomInputFields.map((el, index) => {
              return (
                <div key={index}>
                  <label
                    htmlFor={el.name}
                    className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    {el.label}
                  </label>
                  <textarea
                    type={el.type}
                    id={el.id}
                    rows={el.rows}
                    className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder={el.placeholder}
                    required={el.required}
                    {...formik.getFieldProps(el.name)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-4 px-6 border bg-[#F8F8FB]">
          <button
            type="submit"
            className={`flex justify-center w-full rounded my-auto flex p-2 px-4  ${
              !load ? "bg-[#0568FD]" : "bg-[#789bcf]"
            } text-white`}
            disabled={load}
          >
            <span>Mint the Spell</span>
            <img src="/Sparkles.svg" className="my-auto ml-1" alt="" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewForm;

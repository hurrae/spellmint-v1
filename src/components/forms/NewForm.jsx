import InputFields from "../data/InputFieldsConfig";
import { useState } from "react";
import { useFormik } from "formik";
import React from "react";
import FieldsMap from "../data/FieldsMap";
import axios from "axios";
import { AddCircle20Regular, Dismiss20Regular } from "@fluentui/react-icons";

const NewForm = ({ spellData, initText, setinitText, appUserData, toast }) => {
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
  const [featureNo, setfeatureNo] = useState(
    spellData.featureNo.length > 0 ? spellData.featureNo : [1]
  );
  // console.log("Fields Arr: ", fieldsArr);
  // console.log("Custom: ", CustomInputFields);

  const [conWords, setconWords] = useState(appUserData.consumedWords);

  const onSubmit = (values) => {
    setload(true);
    if (conWords >= appUserData.allottedWords) {
      toast.error("You have exhausted your Credits Usage");
      setload(false);
      return;
    }
    console.log("Values received: ", values);

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_HOST}/api/prompts/test4`,
      data: {
        inputs: JSON.stringify(values),
        category: spellData.proj_category,
        spell_type: spellData.spell_type,
        proj_name: spellData.proj_name,
        proj_description: spellData.proj_description,
        featureNo,
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

        const text = defStr.replace(/(<([^>]+)>)/gi, ""); // to remove HTML tags from the content
        const words = text.trim().split(/\s+/); // Split the text into words
        console.log("Words Length: ", words.length);
        const wordsLen = words.length;
        setconWords(conWords + wordsLen);

        // axios({
        //   method: "post",
        //   url: `${process.env.NEXT_PUBLIC_HOST}/api/spells/updateResText`,
        //   data: {
        //     spellId: spellData._id,
        //     res_text: defStr,
        //     proj_name: spellData.proj_name,
        //     user_email: appUserData.email,
        //   },
        // })
        //   .then((res) => {
        //     console.log("New Res Text updated successfully");
        //   })
        //   .catch((err) => console.log("error occured: ", err));

        axios({
          method: "post",
          url: `${process.env.NEXT_PUBLIC_HOST}/api/updateConsumed`,
          data: {
            email: appUserData.email,
            wordsLen: wordsLen,
          },
        })
          .then((res) => {
            console.log("Consumed Words Updated Successfully");
          })
          .catch((err) =>
            console.log("error occured in consumed words updation: ", err)
          );

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
        featureNo,
      },
    })
      .then((res) => {
        console.log("Inputs updated successfully");
      })
      .catch((err) => console.log("error occured in saving inputs: ", err));
  };
  const spellInputs = JSON.parse(spellData.inputs ? spellData.inputs : "{}");
  console.log("Spell Inputs: ", spellInputs);

  const formik = useFormik({
    initialValues: spellInputs,
    onSubmit,
  });
  // console.log("Feature No: ", featureNo);

  return (
    <form action="#" onSubmit={formik.handleSubmit}>
      <div>
        <div className="h-[65vh] overflow-y-scroll py-8 px-6 mx-auto max-w-screen-md">
          <div className="space-y-4 text-base">
            {CustomInputFields.map((el, index) => {
              return (
                <div key={index}>
                  {el.id !== "Feature" ? (
                    <div>
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
                  ) : (
                    <div>
                      {featureNo.map((feature) => {
                        return (
                          <div className="mb-2 space-y-4 bg-[#F8F8FB] p-4 rounded rounded-xl">
                            {/* <div className="w-full text-end">
                              <Dismiss20Regular className="" />
                            </div> */}
                            <div>
                              <label
                                htmlFor={"Feature" + feature}
                                className="block flex justify-between mb-2 font-medium text-gray-900 dark:text-gray-300"
                              >
                                <span>Feature #{feature}</span>{" "}
                                <span className="-mt-2">
                                  <Dismiss20Regular
                                    onClick={() => {
                                      formik.setFieldValue(
                                        el.name + "Title" + feature,
                                        ""
                                      );
                                      formik.setFieldValue(
                                        el.name + "Description" + feature,
                                        ""
                                      );
                                      setfeatureNo((prevFeatureNo) =>
                                        prevFeatureNo.filter(
                                          (number) => number !== feature
                                        )
                                      );
                                    }}
                                  />
                                </span>
                              </label>
                              <textarea
                                type={el.type}
                                id={"Feature" + feature}
                                rows={1}
                                className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder={"Real-time tracking"}
                                required={false}
                                {...formik.getFieldProps(
                                  el.name + "Title" + feature
                                )}
                              />
                            </div>
                            <hr className="text-[#D0D5DB] " />
                            <div>
                              <label
                                htmlFor={"FeatureDescription" + feature}
                                className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                              >
                                Description
                              </label>
                              <textarea
                                type={el.type}
                                id={"FeatureDescription" + feature}
                                rows={2}
                                className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder={
                                  "User can see their location and the driver's current location on the map."
                                }
                                required={false}
                                {...formik.getFieldProps(
                                  el.name + "Description" + feature
                                )}
                              />
                            </div>
                          </div>
                        );
                      })}

                      <button
                        type="button"
                        onClick={() => {
                          const nextNumber =
                            featureNo[featureNo.length - 1] + 1;
                          setfeatureNo((prevFeatureNo) =>
                            prevFeatureNo.concat(nextNumber)
                          );
                        }}
                        className="text-[16px] w-full bg-[#F8F8FB] p-3 mt-4 rounded border-dashed border-2"
                      >
                        {" "}
                        Add feature{" "}
                        <span>
                          <AddCircle20Regular className="text-[#697283]" />
                        </span>{" "}
                      </button>
                    </div>
                  )}
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

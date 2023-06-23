const SpellForm = ({ initText, setinitText, spellData }) => {
  const [load, setload] = useState(false);
  if (spellData.res_text) {
    setinitText(spellData.res_text);
  }

  const onSubmit = (values) => {
    setload(true);
    console.log("Values received: ", values);
    // setinitText("response got<p><br></p><p><br></p>Hello World");

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
  };

  const formik = useFormik({
    initialValues: {
      PurposeAndScope: "",
      ProductDescription: "",
      KeyUsers: "",
      UserActions: "",
    },
    onSubmit,
  });

  return (
    <form action="#" onSubmit={formik.handleSubmit}>
      <div>
        <div className="h-[65vh] overflow-y-scroll py-8 px-6 mx-auto max-w-screen-md">
          <div className="space-y-4 text-base">
            <div>
              <label
                htmlFor="PurposeAndScope"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Purpose and Scope
              </label>
              <textarea
                type="text"
                id="PurposeAndScope"
                rows="1"
                className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="To build a reliable ride-hailing app"
                required
                {...formik.getFieldProps("PurposeAndScope")}
              />
            </div>
            <div>
              <label
                htmlFor="ProductDescription"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Product Description
              </label>
              <textarea
                type="text"
                id="ProductDescription"
                rows="2"
                className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="An app connecting drivers and passengers for efficient city travel"
                required
                {...formik.getFieldProps("ProductDescription")}
              />
            </div>
            <div>
              <label
                htmlFor="KeyUsers"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Key Users
              </label>
              <textarea
                type="text"
                id="KeyUsers"
                rows="1"
                className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Commuters, Tourists, Drivers"
                required
                {...formik.getFieldProps("KeyUsers")}
              />
            </div>

            <div>
              <label
                htmlFor="UserActions"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                User Actions
              </label>
              <textarea
                type="text"
                id="UserActions"
                rows="2"
                className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Request ride, Accept ride, Navigate to destination"
                required
                {...formik.getFieldProps("UserActions")}
              />
            </div>

            <div>
              <label
                htmlFor="targetmarket"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Target Market
              </label>
              <textarea
                type="text"
                id="targetmarket"
                rows="1"
                className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Small businesses in the retail sector"
              />
            </div>

            <div>
              <label
                htmlFor="targetmarket"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Target Market
              </label>
              <textarea
                type="text"
                id="targetmarket"
                rows="1"
                className="shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Small businesses in the retail sector"
              />
            </div>
          </div>
        </div>
        <div className="py-4 px-6 border bg-[#F8F8FB]">
          <button
            type="submit"
            className={`flex justify-center w-full rounded my-auto flex p-2 px-4  ${
              !load ? "bg-[#7371EE]" : "bg-[#789bcf]"
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

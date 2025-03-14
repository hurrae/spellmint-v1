import React from "react";
import ReadEditor from "@/components/ReadEditor";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";
import Head from "next/head";

const SpellShareDoc = ({ initText, spellName }) => {
  // const [initText, setinitText] = useState(null);
  // const [load, setload] = useState(false);
  // console.log("Spell Sh Id: ", spellShId);

  // const router = useRouter();
  // const shareId = router.query.spellShareId;
  // console.log("Spell Share Id: ", shareId);
  // useEffect(() => {
  //   if (shareId) {
  //     axios({
  //       method: "post",
  //       url: `${process.env.NEXT_PUBLIC_HOST}/api/spells/getResText`,
  //       data: {
  //         share_code: router.query.spellShareId,
  //       },
  //     })
  //       .then(function (res) {
  //         console.log("Response at spell Share: ", res.data);
  //         setinitText(res.data.res_text);
  //         setload(false);
  //       })
  //       .catch((err) => {
  //         router.push("/404");
  //       });
  //   }
  // }, [shareId]);

  return (
    <>
      <Head>
        <title>{`${spellName ? spellName : "Spell"} | Spellmint`}</title>
        <meta
          name="description"
          content="Swap chaos for clarity with Spellmint, the AI that turns brainstorming into brilliance. Equip your teams with cutting-edge planning tools for decision-making so smooth, it'll feel like gliding on air!"
        />
      </Head>
      <Navbar />

      <div className="mt-14 px-2 lg:w-2/3 mx-auto">
        <div>
          <ReadEditor initText={initText} />
        </div>
      </div>
    </>
  );
};

export default SpellShareDoc;

export async function getServerSideProps(context) {
  const { spellShareId } = context.query;

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/spells/getResText`,
      {
        share_code: spellShareId,
      }
    );

    return {
      props: {
        initText: res.data.res_text,
        spellName: res.data.name,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}

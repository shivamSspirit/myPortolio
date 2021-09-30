import VlogList from "../../Components/vblogs/vlogList";

const Dummy_Vlogs = [
  {
    id: "0",
    vlogTitle: "profit-or-loss",
    vlogDate: "December, 2020",
    desCription:
      "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
    buttonLink1: "",
  },
  {
    id: "1",
    vlogTitle: "profit-or-loss",
    vlogDate: "December, 2020",
    desCription:
      "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
    buttonLink1: "",
  },
  {
    id: "2",
    vlogTitle: "profit-or-loss",
    vlogDate: "December, 2020",
    desCription:
      "A website which helps user how much profit or loss he/she is making in percentage & absolute value.",
    buttonLink1: "",
  },
];

function index(props) {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>
          See my <span style={{ color: "blueviolet" }}>Vlogs</span>
        </h1>
      </div>
      {props.vlogs.map((vlog) => (
        <div key={vlog.id}>
          <VlogList
            vlogTitle={vlog.vlogTitle}
            vlogDate={vlog.vlogDate}
            desCription={vlog.desCription}
            buttonLink1={vlog.buttonLink1}
          />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      vlogs: Dummy_Vlogs,
    },
  };
}

export default index;

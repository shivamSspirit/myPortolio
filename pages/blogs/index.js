import VlogList from "../../Components/vblogs/vlogList";

const Dummy_Vlogs = [
	{
		id: "0",
		vlogTitle: "project-based-learning",
		vlogDate: "septmber, 2021",
		desCription:
			"a simple blog application by nextjs with one blog of comparing today's learning scenario",
		buttonLink1: "https://project-based-learning-blog.netlify.app",
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

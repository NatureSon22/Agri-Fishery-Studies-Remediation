import Banner from "./sections/Banner";
import Modules from "./sections/Modules";
import PostTest from "./sections/PostTest";
import PreTest from "./sections/PreTest";
import Progress from "./sections/Progress";

const App = () => {
  return (
    <div className="bg-zinc-100 text-slate-700 font-poppins flex flex-col gap-7 lg:gap-20">
      <Banner />
      <Progress />
      <PreTest />
      <Modules />
      <PostTest />
      <div className="h-10 lg:h-14"></div>
    </div>
  );
};

export default App;

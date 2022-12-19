import AllInfo from './AllInfo';
import './App.css';
import MainInfo from './MainInfo';
import ResponsiveWindow from './ResponsiveWindow';
import SideBar from './SideBar';
function App() {
  return (
    <div className="App w-full h-screen flex items-center justify-center gradient ">
        <div className=' w-[90%] h-[80%] lg:flex hidden lg:visible'>
            <div className=' w-[6%] h-[70%] mr-[1%] border-none rounded bg-[#282830]'>
              <SideBar />
            </div>
            <div className=' w-[38%] h-[110%] mt-[-25px] border-none rounded-md bg-[#282830]'>
              <MainInfo/>
            </div>
            <div className=' w-[55%] h-full border-none rounded-tr rounded-br bg-[#34343f] overflow-auto'>
              <AllInfo/>
            </div>
      </div> {/* Main Page */}
      <div className=' w-[60%] h-[80%] mt-[-25px] border-none rounded-md bg-[#31313a] lg:hidden block'>
        <ResponsiveWindow/>
      </div>{/* ResponsiveWindow */}
    </div>
  );
}

export default App;

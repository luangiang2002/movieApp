
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './componet/HomePage';
import { useState } from 'react';
import SingUp from './authentica/SingUp';
import Singout from './authentica/Singout';
import ResetPassword from './authentica/ResetPassword';
import Login from './authentica/Login';
import SearchVideo from './componet/search/SearchVideo';
import HomeVideo from './componet/watchvideo/HomeVideo';
import Channel from './componet/channelVideo/Channel';
import Short from './componet/short/Short';

function App() {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage handleToggleSidebar={handleToggleSidebar} sidebar={sidebar}></HomePage>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/homevideo/:id' element={<HomeVideo handleToggleSidebar={handleToggleSidebar} sidebar={sidebar}></HomeVideo>}></Route>
        <Route path='/channel/:id' element={<Channel handleToggleSidebar={handleToggleSidebar} sidebar={sidebar}></Channel>}></Route>
        <Route path='/search/:id' element={<SearchVideo handleToggleSidebar={handleToggleSidebar} sidebar={sidebar}></SearchVideo>}></Route>
        <Route path='/sort' element={<Short handleToggleSidebar={handleToggleSidebar} sidebar={sidebar}></Short>}></Route>

        <Route path='/signup' element={<SingUp />}></Route>
        <Route path='/signout' element={<Singout />}></Route>
        <Route path='/reset' element={<ResetPassword />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default App;

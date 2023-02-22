import "./App.css";
// import {database} from './../../database/database.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./../modules/Signup/Signup";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        
      <Route path="/test" element={<Signup/>} />
        <Route path="/" element={<h2>Root</h2>} />
        <Route path="/home" element={<h2>Landing page</h2>} />
        <Route path="/login" element={<h2>Login page</h2>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recover" element={<h2>Password Recovery page</h2>} />

        <Route path="/owner" element={<h2>Owner Home page</h2>} />
        <Route path="/owner/dashboard/:id" element={<h2>Dashboard page</h2>} />
        <Route path="/owner/pet/event/:id" element={<h2>Individual Event page</h2>} />
        <Route path="/owner/pet/:id" element={<h2>Edit Pet page</h2>} />
        <Route path="/owner/addpet" element={<h2>Add pet page</h2>} />
        <Route path="/owner/bookappointment" element={<h2>Book appointment page</h2>} />
        <Route path="/owner/editappointment/:id" element={<h2>Edit appointment Page</h2>} />
        <Route path="/owner/sharepet" element={<h2>Share pet page</h2>} />
        <Route path="/owner/clinic/about" element={<h2>About pages</h2>} />

        <Route path="/clinic" element={<h2>Clinic Home Page</h2>} />
        <Route path="/clinic/edit" element={<h2>Clinic Edit Page</h2>} />
        <Route path="/clinic/edit/timings" element={<h2>Clinic edit Timings page</h2>} />
        <Route path="/clinic/slots/update" element={<h2>Clinic slot update page</h2>} />
        <Route path="/clinic/cancelappointment/:id" element={<h2>Cancel appointment page</h2>} />
        
        <Route path="/owner/message" element={<h2>Owner message page</h2>} />
        <Route path="/clinic/message" element={<h2>Clinic Message page</h2>} />

        <Route path="*" element={<h2>Unknown route</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

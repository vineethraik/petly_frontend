import React from "react";

import Signup from "./modules/Signup/Signup";
import Login from "./modules/Login/Login";
import PasswordRecovery from './modules/PasswordRecovery/PasswordRecovery';

import OwnerHome from './modules/OwnerHome/OwnerHome';
import AddPet from './modules/AddPet/AddPet';
import EditPet from './modules/EditPet/EditPet'
import AboutClinics from './modules/AboutClinics/AboutClinics'
import Dashboard from './modules/Dahboard/Dashboard'

let _Routes = [
    {path: '/', element: <h2>Root</h2>, role: ['all'], type: 'public'},

    {path:'/home', element:<h2>Landing page</h2>, role:['all'], type: 'public'},

    {path:'/login', element:<Login />, role:['all'], type: 'public'},

    {path:'/signup', element:<Signup />, role:['all'], type: 'public'},

    {path:'/recover', element:<PasswordRecovery />, role:['all'], type: 'public'},

    {path:'/owner', element:<OwnerHome />, role:['owner'], type: 'private'},

    {path:'/owner/dashboard/:id', element:<Dashboard />, role:['owner'], type: 'private'},

    {path:'/owner/pet/event/:id', element:<h2>Individual Event page</h2>, role:['owner'], type: 'private'},

    {path:'/owner/pet/:id', element:<EditPet />, role:['owner'], type: 'private'},

    {path:'/owner/addpet' ,element:<AddPet /> ,role:['owner'] ,type: 'private'},

    {path:'/owner/bookappointment' ,element:<h2>Book appointment page</h2> ,role:['owner'] ,type: 'private'},

    {path:'/owner/editappointment/:id' ,element:<h2>Edit appointment Page</h2> ,role:['owner'] ,type: 'private'},

    {path:'/owner/sharepet' ,element:<h2>Share pet page</h2> ,role:['owner'] ,type: 'private'},

    {path:'/owner/clinic/about' ,element:<AboutClinics /> ,role:['owner'] ,type: 'private'},


    {path:'/clinic' ,element:<h2>Clinic Home Page</h2> ,role:['clinic'] ,type: 'private'},

    {path:'/clinic/edit' ,element:<h2>Clinic Edit Page</h2> ,role:['clinic'] ,type: 'private'},

    {path:'/clinic/edit/timings' ,element:<h2>Clinic edit Timings page</h2> ,role:['clinic'] ,type: 'private'},

    {path:'/clinic/slots/update' ,element:<h2>Clinic slot update page</h2> ,role:['clinic'] ,type: 'private'},

    {path:'/clinic/cancelappointment/:id' ,element:<h2>Cancel appointment page</h2> ,role:['clinic'] ,type: 'private'},


    {path:'/owner/message' ,element:<h2>Owner message page</h2> ,role:['owner'] ,type: 'private'},

    {path:'/clinic/message' ,element:<h2>Clinic Message page</h2> ,role:['clinic'] ,type: 'private'},

    
    {path:'*' ,element:<Login /> ,role:['all'] ,type: 'public'},

    
];





export default _Routes;
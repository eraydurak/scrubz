import React, { useState } from "react";
import DeleteSvg from "./../svgFolder/DeleteSvg";
import PencilSvg from "./../svgFolder/PencilSvg";
import ProfileSvg from "./../svgFolder/ProfileSvg";
import ThreeDotsSvg from "./../svgFolder/ThreeDotsSvg";

const Item = ({ profile, setMemberById, deleteById }) => {
  const [edit, setEdit] = useState(false);
  const [members] = useState(profile.name);
  const [name, setName] = useState(profile.name)
  const [active, setActive] = useState(false)


  const handleEdit = (e) => {
    setEdit(!edit);
    e.preventDefault();
  };

  const handleSave = (e) => {
    if (name === "") {
      deleteById(profile.id);
      return;
    }
    e.preventDefault();
    setMemberById(profile.id, name)
    setEdit(false);
    console.log("eray");
  }

  const onChangeHandler = (e) => {
    setName(e.target.value)
  }


  return (
    <div className={edit ? "profile-div editable" : "profile-div"} key={profile.id}>
      {!edit ? (
        <>
          <div className="profile-div-name">
            <span><ProfileSvg />
            </span>
            <span>{profile.name}</span>
          </div>
          <button onClick={() => setActive(!active)}>
            <ThreeDotsSvg />
            {active ? <div className="afterPopUp">
              <div onClick={() => setEdit(true)}><span><PencilSvg /></span>Edit</div>
              <div onClick={() => deleteById(profile.id)} ><span><DeleteSvg /></span>Delete</div>
            </div> : null}
          </button>
        </>
      ) : (
        <>
          <div className="editable-input">
            <span> <ProfileSvg /> </span>
            <input
              value={name}
              onChange={onChangeHandler}
            />
          </div>
          <div className="editable-input-buttons">
            <button onClick={handleEdit}>Cancel</button>
            <button onClick={handleSave}>
              Save
          </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
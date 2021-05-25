import React, { useState, useEffect } from 'react'
import userList from './../members.json';
import Profile from './Profile';
import './../styles/Modal.scss'
import CloseBtn from './../svgFolder/CloseBtn';
import PlusBtn from './../svgFolder/PlusBtn';


const Modal = () => {

  const [members, setMembers] = useState(userList.users);
  const [member, setMember] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([...members])
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
    setMember(e.target.value)
  }


  useEffect(() => {
    setFilteredMembers(
      members.filter((member) =>
        member.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, members]);

  const onClickHandler = (e) => {
    e.preventDefault();
    if (member === "") {
      return;
    }
    let memberr = {
      id: members.length,
      name: member
    };
    setMembers([...members, memberr]);
    setMember("")
  }

  const deleteById = (id) => {
    setMembers(members.filter(member => member.id !== id))
  }

  const setMemberById = (id, value) => {
    let getMembers = members;
    getMembers[id].name = value;
    setMembers(getMembers)
  }

  return (
    <>
      <div className="container">
        <nav>
          <h3>Settings</h3>
          <ul>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Members</a>
            </li>
          </ul>
          <div style={{ cursor: "pointer" }} className="close-btn">
            <CloseBtn />
          </div>
        </nav>
        <div className="member-area">
          <div className="input-area">
            <input placeholder="Add member" onChange={onChangeHandler} autoComplete="off" />
            <button onClick={onClickHandler}>
              <span>
                <PlusBtn />
              </span> <span>Add Member</span>
            </button>
          </div>
          {members.length > 0 ? (
            <div className="person-info">
              {
                filteredMembers.map((profile) => {
                  return (
                    <Profile
                      profile={profile}
                      setMembers={setMembers}
                      members={members}
                      key={profile.id}
                      member={member}
                      setMemberById={setMemberById}
                      deleteById={deleteById}
                    />
                  )
                })
              }
            </div>
          ) : (
            <div className="nobody">
              <p>You don't have any member !</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;

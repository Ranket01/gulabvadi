import "./AdminPanel.css";
import AdminPanelUploadImage from './AdminPanelUploadImage'
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function AdminPanel() {
  const [inquiryData, setInquiryData] = useState(null);
  // const [individualId, setIndividualId] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gulabvadi-4169a-default-rtdb.asia-southeast1.firebasedatabase.app/SubscriberData.json"
        );
        const data = await response.json();
        const finalArr = [];

        for (const [id, obj] of Object.entries(data)) {
          const finalObj = { ...obj, id };
          finalArr.push(finalObj);
        }
        setInquiryData(finalArr);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch(
      `https://gulabvadi-4169a-default-rtdb.asia-southeast1.firebasedatabase.app/SubscriberData/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setInquiryData(
          inquiryData.filter((subscriber) => subscriber.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  return (<>
    <div id="adminpanelmaindiv">
      {inquiryData ? (<>
        <h2 style={{textAlign:"center"}}>List of Inquiry</h2>
        <table className="table  table-success table-striped" id="tableForList">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {inquiryData.map((subscriber, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{subscriber.nameOfVisitor}</td>
                <td style={{ color: "blue" }}>
                  +91 {subscriber.phoneOfVisitor}
                </td>
                <td style={{ paddingLeft: "27px" }}>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => {
                      handleDelete(subscriber.id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>) : (
        <p>Loading...</p>
        )}
    </div>

          <AdminPanelUploadImage/>

    </>);
}

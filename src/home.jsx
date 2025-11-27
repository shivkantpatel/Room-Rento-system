import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line
  }, []);

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5400/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.user);
      
      setProfile(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Session expired. Login again.");
      localStorage.removeItem("token");
      navigate("/");
    }
  };

 
  return (
    <div style={{ padding: 20 }}>
      <h2>Profile</h2>
      {profile ? (
        <div>
          {console.log(profile)}
          
          <p><strong>Email:</strong> {profile.user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
}

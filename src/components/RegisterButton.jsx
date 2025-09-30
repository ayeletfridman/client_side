import { useState } from "react";
import { authService } from "../services/auth";

export default function RegisterButton() {
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);
      const creds = { username: "newuser", password: "654321" };
      const res = await authService.register(creds);
      console.log("Register response:", res);
      alert(`נרשמת בהצלחה כ-${res?.user?.username}.`);
    } catch (e) {
      const msg = e?.response?.data?.message || e.message;
      alert("שגיאה ברישום: " + msg);
      console.error("Register failed:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleRegister}
      disabled={loading}
      style={{ marginLeft: 12 }}
    >
      {loading ? "נרשם..." : "Register (hardcoded)"}
    </button>
  );
}

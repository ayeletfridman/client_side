import { useState } from "react";
import { authService } from "../services/auth";

export default function LoginButton() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const creds = { username: "sara", password: "123456" };

      const res = await authService.login(creds);
      console.log("Login response:", res);

      if (res?.token) {
        alert("התחברת בהצלחה! הטוקן נשמר ב-localStorage");
      } else {
        alert("לא התקבל טוקן. בדוק את השרת/תגובות.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert(err?.response?.data?.message || "שגיאת לוגין");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogin}
      disabled={loading}
      style={{ marginBottom: 12 }}
    >
      {loading ? "מתחבר..." : "התחבר"}
    </button>
  );
}

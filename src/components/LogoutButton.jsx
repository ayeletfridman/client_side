import { useState } from "react";
import { authService } from "../services/auth";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await authService.logout();
      alert("התנתקת בהצלחה!");
    } catch (err) {
      console.error("Logout failed:", err);
      alert(err?.response?.data?.message || "שגיאת Logout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      style={{ marginLeft: 12 }}
    >
      {loading ? "מתנתק..." : "התנתק"}
    </button>
  );
}

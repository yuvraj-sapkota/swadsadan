import { AlertTriangle, Eye, EyeOff, Lock, Save, Shield, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const AccountTab = () => {
  const [showPass, setShowPass] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [passForm, setPassForm] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const handlePassChange = (e) =>
    setPassForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSavePass = () => {
    if (!passForm.current || !passForm.new || !passForm.confirm) {
      toast.error("Please fill all fields");
      return;
    }
    if (passForm.new !== passForm.confirm) {
      toast.error("New passwords do not match");
      return;
    }
    if (passForm.new.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    toast.success("Password changed successfully!");
    setPassForm({ current: "", new: "", confirm: "" });
  };
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(true);
  return (
    <>
      <div className="bg-white rounded-md border border-gray-100 shadow-sm p-4">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2 mb-5">
          <Lock size={15} className="text-orange-500" />
          CHANGE PASSWORD
        </h2>

        <div className="space-y-4">
          {[
            { name: "current", label: "Current Password" },
            { name: "new", label: "New Password" },
            { name: "confirm", label: "Confirm New Password" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                {field.label}
              </label>
              <div className="relative">
                <input
                  name={field.name}
                  type={showPass[field.name] ? "text" : "password"}
                  value={passForm[field.name]}
                  onChange={handlePassChange}
                  placeholder="••••••••"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-orange-400 pr-10"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPass((p) => ({ ...p, [field.name]: !p[field.name] }))
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPass[field.name] ? (
                    <EyeOff size={15} />
                  ) : (
                    <Eye size={15} />
                  )}
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleSavePass}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition mt-1"
          >
            <Save size={14} /> Update Password
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-md p-4">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2 mb-5">
          <Shield size={15} className="text-orange-500" />
          DANGER ZONE
        </h2>
        {/* danger zone */}

        <div className="rounded-lg border border-red-100 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle size={16} className="text-red-500 mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-red-700">
                Delete Account
              </p>
              <p className="text-xs text-red-500 mt-0.5">
                Once deleted, all your restaurant data, menus, and reservations
                will be permanently removed. This cannot be undone.
              </p>
              {!showDeleteConfirm ? (
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="mt-3 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-xs font-medium px-4 py-2 rounded-lg transition"
                >
                  <Trash2 size={13} /> Delete My Account
                </button>
              ) : (
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs text-red-600 font-medium">
                    Are you sure?
                  </span>
                  <button
                    onClick={() => {
                      toast.error("Account deletion requested.");
                      setShowDeleteConfirm(false);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-white transition"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountTab;

import { useState } from "react";
import Error from "./Error";

import { NotificationService } from "../services/NotificationService";

const Form = ({ notifications, setNotifications }) => {
  const [message, setMessage] = useState({ category: "", description: "" });
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([message.category, message.description].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const notificationService = new NotificationService();
    const response = await notificationService.sendMessage(message);

    if (response.success) setNotifications(notifications.concat(response.records));
    setMessage({ category: "", description: "" });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Sending Message</h2>
      <p className="text-xl  mt-5 text-center mb-10 text-indigo-600 font-bold">Send message</p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && (
          <Error>
            <p>All fields are required</p>
          </Error>
        )}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Category
          </label>
          <select
            id="category"
            value={message.category}
            onChange={(e) => setMessage({ ...message, category: e.target.value })}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          >
            <option value="">-- SELECT A CATEGORY --</option>
            <option value="sports">Sports</option>
            <option value="finance">Finance</option>
            <option value="movies">Movies</option>
          </select>
        </div>
        <div className="mb-5">
          <label htmlFor="síntomas" className="block text-gray-700 uppercase font-bold">
            Message
          </label>
          <textarea
            id="message"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={message.description}
            onChange={(e) => setMessage({ ...message, description: e.target.value })}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
          value="submit message"
        />
      </form>
    </div>
  );
};

export default Form;

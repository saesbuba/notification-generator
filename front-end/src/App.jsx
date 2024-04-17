import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Notifications from "./components/Notifications";
import { NotificationService } from "./services/NotificationService";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      if (notifications.length < 1) {
        const notificationService = new NotificationService();
        const data = await notificationService.getNotifications();
        if (data.records.length > 0) setNotifications(data.records);
      }
    };
    getNotifications();
  }, []);

  const sortedNotifications = useMemo(() => {
    return notifications.sort((a, b) => {
      const firstDate = new Date(Date.parse(`${a.creationDate} ${a.creationTime}`));
      const secondDate = new Date(Date.parse(`${b.creationDate} ${b.creationTime}`));
      return secondDate - firstDate;
    });
  }, [notifications]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form notifications={sortedNotifications} setNotifications={setNotifications} />
        <Notifications notifications={sortedNotifications} />
      </div>
    </div>
  );
}

export default App;

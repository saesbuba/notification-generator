import Notification from "./Notification";
// eslint-disable-next-line react/prop-types
const Notifications = ({ notifications }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {notifications && notifications.length ? (
        <>
          <h2 className="font-black text-3xl text-center"> Notifications history </h2>
          <p className="text-xl mt-5 mb-10 text-center text-indigo-600 font-bold">
            Notifications sent
          </p>
          {notifications.map((notification) => (
            // eslint-disable-next-line react/jsx-key
            <Notification key={notification.id} notification={notification} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No records found</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Once you send a message{" "}
            <span className="text-indigo-600 font-bold">notifications will be displayed here</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Notifications;

import Log from "./Log";
// eslint-disable-next-line react/prop-types
const LogHistory = ({ logs }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {logs && logs.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Log history</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {logs.map((log) => (
            // eslint-disable-next-line react/jsx-key
            <Log key={log.id} log={log} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No records found</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Once you send a message{" "}
            <span className="text-indigo-600 font-bold">they will be displayed here</span>
          </p>
        </>
      )}
    </div>
  );
};

export default LogHistory;

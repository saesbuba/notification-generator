const Log = ({ log }) => {
  const { id, detail, date, time } = log;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Detalle: <span className="font-normal normal-case">{detail}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Time: <span className="font-normal normal-case">{email}</span>
      </p>
    </div>
  );
};

export default Log;

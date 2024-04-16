import Chip from "@mui/material/Chip";
import SmsIcon from "../resources/img/sms.svg";
import EmailIcon from "../resources/img/email.svg";
import PushIcon from "../resources/img/push.svg";

const iconDictionary = {
  sms: { icon: SmsIcon, alt: "sms icon" },
  email: { icon: EmailIcon, alt: "email icon" },
  push: { icon: PushIcon, alt: "push icon" },
};

const categoryDictionary = {
  sports: "secondary",
  movies: "info",
  finance: "warning",
};

const Notification = ({ notification }) => {
  const { subscriber, typeOfMessage, typeOfNotification, creationDate, creationTime } =
    notification;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <section className="flex items-center justify-around">
        <img
          src={iconDictionary[typeOfNotification]["icon"]}
          alt={iconDictionary[typeOfNotification]["alt"]}
        />
        <section className="flex flex-col items-center w-[220px] text-gray-500">
          <span className="text-gray-900">{"subscriber".toUpperCase()}</span>
          <span>{subscriber.name}</span>
          <span>{subscriber.email}</span>
          <span>{subscriber.phoneNumber}</span>
        </section>
        <section className="flex flex-col items-center">
          <span className="text-gray-900">{"Creation date / time".toUpperCase()}</span>
          <span className="text-gray-500">{`${creationDate} ${creationTime}`}</span>
        </section>
        <Chip label={typeOfMessage} color={categoryDictionary[typeOfMessage]} />
      </section>
    </div>
  );
};

export default Notification;

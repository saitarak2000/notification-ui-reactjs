const Notification = (props) => {
  //  Write your code here.
  const { className, image, text } = props;
  const containerClassName = `${className}`;

  return (
    <div className={`${className}`}>
      <img className="icon" src={image} />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Notifications</h1>
    <div className="notifications_list">
      <Notification
        className="info_message"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />

      <Notification
        className="success_message"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />

      <Notification
        className="warning_message"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />

      <Notification
        className="danger_message"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Danger Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

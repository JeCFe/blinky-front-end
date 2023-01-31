interface props {
  action: () => void;
}

export const DeskOrganisationButton = (props: props) => {
  return (
    <div className="login-form">
      <div className="form-box solid">
        <h1 className="login-text">Organise Room</h1>
        <button onClick={props.action} className="button-btn DO">
          Go to desk organisation
        </button>
      </div>
    </div>
  );
};

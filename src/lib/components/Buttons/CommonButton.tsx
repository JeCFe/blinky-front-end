interface props {
  type: string;
  value: string;
  action?: () => void;
}

export const CommonButton = (props: props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      className="button-btn"
      onClick={props.action}
    />
  );
};

interface Types {
  avatarUrl: string;
  name: string;
  text?: string;
  date?: Date;
}
const UerInfo = (props: Types) => {
  return (
    <div className='UserInfo'>
      <img className='Avatar' src={props.avatarUrl} alt={props.name} />
      <div className='UserInfo-name'>{props.name}</div>
    </div>
  );
};
function Extraction(props: Types): React.ReactElement {
  function formatDate(date: Date) {
    return date.toLocaleDateString();
  }
  return (
    <div className='Comment'>
      <UerInfo
        avatarUrl={props.avatarUrl}
        name={props.name}
      />
      <div className='Comment-text'>{props.text}UerInfo</div>
      <div className='Comment-date'>{formatDate(props.date as Date)}</div>
    </div>
  );
}

export default Extraction;

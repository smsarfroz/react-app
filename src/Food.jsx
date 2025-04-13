import valeriya from "../public/valeriya.jpg";
function Food() {
  return (
    <div className="favFood">
      <img src={valeriya} alt="" height={400} width={400} />
      <div className="subtitle">here's some food</div>
      <h1>Test title</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

export { Food };

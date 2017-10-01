class Reservation extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <form action="/test" method="post">
                    <div className="row">
                        <div className="col-xs-4">
                            <label>aaClass name</label>
                            <input type="text" name="class" maxLength="200" autoFocus className="form-control" ></input>
                        </div>
                        <div className="col-xs-4">
                            <label>date</label>
                            <input type="date" name="date" maxLength="200" autoFocus className="form-control" ></input>
                        </div>
                        <div className="col-xs-4">
                            <label>Detail</label>
                            <input type="text" name="detail" maxLength="200" autoFocus className="form-control" ></input>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <Reservation />, document.getElementById('root'));
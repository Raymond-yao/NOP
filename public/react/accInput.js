<!--<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js">
    Document.ready(){
        class AddInput extends React.Component {
            constructor(props) {
                super(props); this.state = {
                    isGoing: true, numberOfGuests:
                    2
                };
            } handleSubmit(event) { alert('submitted value: ' + this.state.value); event.preventDefault(); } render() {
                return (
                    <form onSubmit={this.handleSubmit} >
                        <label>
                            Is going:
                    <input
                                name="isGoing"
                                type="checkbox"
                                checked={this.state.isGoing}
                                onChange={this.handleInputChange} />
                        </label>
                        < br />
                        <label>
                            Number of guests:
                    <input
                                name="numberOfGuests"
                                type="number"
                                value={this.state.numberOfGuests}
                                onChange={this.handleInputChange} />
                        </label>
                        < input type="submit" value="Submit" />
                    </form>
                );
            }
        }
                
                ReactDOM.render((<AddInput />), document.getElementById('input') );
                }
    </script>-->
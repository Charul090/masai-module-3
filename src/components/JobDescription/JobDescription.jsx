import React from "react";
import axios from "axios";
import styles from "./JobDescription.module.css";
import { v1 as uuidv1 } from 'uuid';
import NotFound from "../NotFound/NotFound.jsx"


export default class JobDescription extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "",
            status: false
        }
    }

    componentDidMount() {
        let { match } = this.props;

        let id = match.params.id;

        let x = this.props.data.find((elem) => {
            return elem.id === id
        });

        if (x === undefined) {
            this.setState({ status: true })
        }

        else {
            axios({
                method: "get",
                url: `https://jobs.github.com/positions/${id}.json`
            }).then((res) => res.data)
                .then((elem) => {
                    this.setState({ data: elem })
                })
        }
    }

    render() {
        let x = this.state.data.description
        let y = this.state.data["how_to_apply"];

        if (this.state.status) {
            return (
                <NotFound />
            )
        }

        if (this.state.data !== "") {
            return (

                <main className={styles.main}>
                    <div className={styles.mainone}>
                        <div className={styles.desc}>
                            <div className={styles.info}>
                                <h2>{this.state.data.title}</h2>
                                <h4><a href={`${this.state.data.company_url}`}>{this.state.data.company}</a> </h4>
                                <h5>{this.state.data.type}</h5>
                                <p><i>{this.state.data.location}</i></p>
                                <button className="btn btn-dark mb-2" type="button" data-toggle="collapse" data-target="#applycard">APPLY NOW</button>
                                <div className="collapse" id="applycard">
                                    <div className="card card-body">
                                        <div className="text-left" dangerouslySetInnerHTML={{ __html: y }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.logo}>
                                <img src={`${this.state.data.company_logo}`} className="img-fluid img-thumbnail"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wiki}>
                        <div dangerouslySetInnerHTML={{ __html: x }} />
                    </div>
                </main>
            )
        }
        else {
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }

    }
}

//
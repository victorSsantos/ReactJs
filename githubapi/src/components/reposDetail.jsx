import React, {Component} from 'react';
import './reposDetail.css';

export default class ReposDetail extends Component {
    render(){
        const items = [];

        if(this.props.reposContent < 1 ){
            return <div></div>
        }else{
            for (var i = 0 ; i <= this.props.reposContent.length -1 ; i++ ){
                items.push(
                    <div key={this.props.reposContent[i].id} className="Span-Repos-Detail">
                        <span className="repo-name">{this.props.reposContent[i].name}</span>
                        <span className="repo-description">{this.props.reposContent[i].description}</span>
                        <span className="Align-Helper">
                            <img src={require("../img/star_icon.svg")} alt="star_icon.svg"/>
                            <span className="star-count">{this.props.reposContent[i].stargazers_count}</span>
                        </span>
                    </div>
                )
            }

            return (
                <div className="Div-Repos-List">
                    {items}
                </div>
            );
        }
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactNestedMenu } from 'react-nested-menu';


class NestedNav extends Component {
    linkTransformer = (menuItem) => {

        return (
            <Link to={menuItem.url}>{ menuItem.title }</Link>
        )
    }

    render() {

        const menu = [
            {
                id: 1,
                title: "Home",
                url: "/"
            },
            {
                id: 2,
                title: "About Us",
                url: "/about-us"
            },
            {
                title: "Team",
                url: "/team",
                children: [
                    {
                        id: 8,
                        title: "Tim Drake",
                        url: "/tim-drake"
                    },
                    {
                        id: 9,
                        title: "Jason Todd",
                        url: "/jason-todd"
                    },
                    {
                        id: 10,
                        title: "Richard Grayson",
                        url: "/richard-grayson"
                    }
                ]
            },
            {
                title: "Services",
                url: "/services",
                children: [
                    {
                        id: 5,
                        title: "Web Development",
                        url: "/web-development"
                    },
                    {
                        id: 6,
                        title: "UI Design",
                        url: "/ui-design"
                    },
                    {
                        id: 7,
                        title: "Copywriting",
                        url: "/copywriting"
                    }
                ]
            },
            {
                id: 4,
                title: "Contact",
                url: "/contact"
            },
            {
                title: "Social",
                url: "/social",
                children: [
                    {
                        id: 11,
                        title: "Twitter",
                        url: "/twitter"
                    },
                    {
                        id: 12,
                        title: "Facebook",
                        url: "/facebook"
                    }
                ]
            },
        ];

        return (
            <div className="NestedNav">
                <ReactNestedMenu
                    navParentClassname="vertical menu nested"
                    navTopLevelParentClassname="vertical menu"
                    navChildClassname="child"
                    linkTransformer={this.linkTransformer}
                    menuData={menu}/>
            </div>
        );
    }
}

export default NestedNav
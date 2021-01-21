import React from 'react';
import { Tree } from 'antd';
import Title from './title';
const treeData = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    { title: '0-0-0-2', key: '0-0-0-2' },
                ],
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0' },
                    { title: '0-0-1-1', key: '0-0-1-1' },
                    { title: '0-0-1-2', key: '0-0-1-2' },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
            },
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' },
        ],
    },
    {
        title: '0-2',
        key: '0-2',
    },
]
class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tree: treeData
        }

        this.setState({
            tree: treeData.map((item) => this.mapTree(item))
        });
    }

    render() {
        return (
            <Tree
                treeData={this.state.tree}
                onSelect={this.onNodeSelect.bind(this)}
            />
        );
    }

    onNodeSelect(key, info) {
        this.state.tree.forEach(item => {
            // if (item.key === key) {
            item.title = <Title value={33}></Title>
            // }
        })
        this.setState({
            tree: [...this.state.tree]
        });

        console.log(this.state.tree);

    }

    mapTree(tree) {
        tree.title = <Title value={tree.key}></Title>
        if (tree.children && tree.children.length) {
            tree.children.map(item => this.mapTree(item))
        }
    }
}



export default Demo;
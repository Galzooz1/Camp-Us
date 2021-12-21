import React, { useRef, useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import storeUsers from '../../stores/usersStore';
import { observer } from 'mobx-react-lite';
import storeAdmin from '../../stores/adminStore';

const DataTable = (props) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const columns = [];

    const data = storeAdmin.renderApiMethod(storeAdmin.apiMethodOf);

    const getColumnSearchProps = (dataIndex) => {
        return {
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: "8px" }}>
                    <Input
                        ref={searchInput}
                        placeholder={`Search ${dataIndex}`}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                            icon={<SearchOutlined />}
                            size="small"
                            style={{ width: 90 }}
                        >
                            Search
                        </Button>
                        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                            Reset
                        </Button>
                    </Space>
                </div>
            ),
            filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
            onFilter: (value, record) =>
                record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: visible => {
                if (visible) {
                    setTimeout(() => searchInput && searchInput.current && searchInput.current.select());
                }
            },
            render: text =>
                searchedColumn === dataIndex ? (
                    <Highlighter
                        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                        searchWords={[searchText]}
                        autoEscape
                        textToHighlight={text.toString()}
                    />
                ) : (
                    text
                ),
        }
    };

    function handleSearch(selectedKeys, confirm, dataIndex) {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    function handleReset(clearFilters) {
        clearFilters();
        setSearchText('');
    };

    if (storeUsers?.usersList?.length > 0) {
        Object.keys(data[0]).forEach((item, i) => {
            let Title = item.toLowerCase()
                .split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            let titleItem = Title.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            columns.push({
                title: titleItem,
                dataIndex: item,
                width: 150,
                ...getColumnSearchProps(item)
            })
        })
        columns.push({
            title: "Action",
            dataIndex: "action",
            width: 150,
            render: (text, record) => (
                <Space size="middle" >
                    <div className="text-danger" onClick={() => {
                        if (window.confirm("Are you sure you want to delete " + record.name + "?")) {
                            storeAdmin.deleteItem(storeAdmin.apiMethodOf, record.id);
                        }
                    }}>Delete</div>
                </Space >
            )
        })
    }

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{ position: ["topRight"] }}
            loading={storeAdmin.renderApiMethod(storeAdmin.apiMethodOf) && storeAdmin.renderApiMethod(storeAdmin.apiMethodOf).length ? false : true}
        />
    )

}

export default observer(DataTable)
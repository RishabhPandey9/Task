import { Space, Table, Tag } from 'antd';
import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import {  Modal } from 'antd';
import {BiLogOut} from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [data,setData] = useState([])
    const [output,setOutput2] = useState([])
    const [input, setInput] = useState("");
    const [cap,setCap] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    async function getData() {
        await axios
          .get("https://restcountries.com/v2/all")
          .then((res) => {
            console.log(res.data,"<===data");
            if(input === ''){
                setOutput2(res.data)
              }
              else{
                setOutput2(
                  res.data.filter((item) => {
                  
                      return (
                        item.name?.toLowerCase().includes(input?.toLowerCase())
        
                    );
                    
                      
                  })
              );
              }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Capital',
          dataIndex: 'capital',
          key: 'capital',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Currencies',
          dataIndex: 'currencies',
          key: 'currencies',
          render: (_, record) => (
              <Space size="middle">
                <div> {record.name}</div>
             
              </Space>
            ),
        },
      
      ];
    
      useEffect(() => {
        getData();
      }, [input]);
  return (
    <>
    <div className='h-12 flex justify-end bg-black'>
        <button onClick={() => {navigate('/'); localStorage.clear();}} className='bg-white mr-20 px-10 my-2 rounded-md'><div className='flex' ><div className='text-[20px] mr-4'><BiLogOut/></div><div>Logout</div> </div></button>
    </div>
  <div className='mx-40 mt-12'>
  <div className="relative w-full ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input  onChange={(e) => setInput(e.target.value)} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Countries" required />
    </div>
  </div>
  
 
    <div className='flex mt-10 px-20 items-center  w-full '>
        <div className='w-full'><Table columns={columns} dataSource={output}  onRow={(record, rowIndex) => {
    return {
      onClick: event => {console.log('event', record); setCap(record.capital); showModal()}, // click row
    
    };
  }}/></div></div>
   <Modal  visible={isModalVisible} onOk={handleOk} footer={false} onCancel={handleCancel} >
        <div className='mt-10 font-semibold text-[20px]'>Capital : {cap}</div>
      </Modal>
  
    </>
  )  
}

export default Home
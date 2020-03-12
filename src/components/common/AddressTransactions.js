import React from "react";
import { injectIntl,FormattedDate,FormattedTime } from "react-intl";
import { Client } from "../../services/api";
import { TransactionHashLink, AddressLink, BlockNumberLink } from "./Links";
import { Icon } from 'antd';
import {connect} from "react-redux";
import { tu } from "../../utils/i18n";
// import TimeAgo from "react-timeago";
import { TronLoader } from "./loaders";
import { Truncate } from "./text";
import { ContractTypes } from "../../utils/protocol";
import SmartTable from "./SmartTable.js";
import { upperFirst } from "lodash";
import TotalInfo from "./../../components/addresses/components/TableTotal";
import DateSelect from "./../../components/addresses/components/dateSelect";
import { DatePicker } from "antd";
import moment from "moment";
import { NameWithId } from "./names";
import rebuildList from "../../utils/rebuildList";
import { API_URL } from "../../constants";
import qs from "qs";
import BlockTime from "../common/blockTime";

const RangePicker = DatePicker.RangePicker;

class Transactions extends React.Component {
  constructor(props) {
    super(props);

    this.start = moment([2018, 5, 25])
      .startOf("day")
      .valueOf();
    this.end = moment().valueOf();
    this.state = {
      filter: {},
      transactions: [],
      total: 0,
      emptyState: props.EmptyState || (
        <TronLoader>Loading Transactions</TronLoader>
      ),
      timeType:true
    };
  }

  componentDidMount() {
    // this.loadTransactions();
    let { isBlock } = this.props;
    if (isBlock) {
      this.loadTransactions();
    }
  }

  componentDidUpdate(prevProps) {
    let { filter, page } = this.props;
    if (
      prevProps.filter.address !== filter.address &&
      page.router == "account"
    ) {
      this.loadTransactions();
    }
  }

  onChange = (page, pageSize) => {
    this.loadTransactions(page, pageSize);
  };

  loadTransactions = async (page = 1, pageSize = 20) => {
    let { filter, isinternal = false, address = false, getCsvUrl } = this.props;

    this.setState({
      loading: true,
      page: page,
      pageSize: pageSize
    });

    let transactions,
      total,
      rangeTotal = 0;

    if (!isinternal) {
      if (address) {
        const allData = await Promise.all([
          Client.getTransactions({
            sort: "-timestamp",
            limit: pageSize,
            start: (page - 1) * pageSize,
            // total: this.state.total,
            start_timestamp: this.start,
            end_timestamp: this.end,
            ...filter
          }),
          Client.getTransactions({
            limit: 0,
            ...filter
          }),
          Client.getTransactions({
            limit: 0,
            start_timestamp: this.start,
            end_timestamp: this.end,
            ...filter
          })
        ]).catch(e => {
          console.log("error:" + e);
        });
        [{ transactions }, { total }, { rangeTotal }] = allData;
      } else {
        const allData = await Promise.all([
          Client.getTransactions({
            limit: pageSize,
            start: (page - 1) * pageSize,
            sort: "-timestamp",
            total: this.state.total,
            ...filter
          }),
          Client.getTransactions({
            limit: 0,
            ...filter
          })
        ]).catch(e => {
          console.log("error:" + e);
        });
        [{ transactions }, { total, rangeTotal }] = allData;
      }
    } else {
      const params = {
        start_timestamp: this.start,
        end_timestamp: this.end,
        ...filter
      };
      const query = qs.stringify({ format: "csv", ...params });
      getCsvUrl(`${API_URL}/api/internal-transaction?${query}`);

      const allData = await Promise.all([
        Client.getInternalTransaction({
          limit: pageSize,
          start: (page - 1) * pageSize,
          ...params
        }),
        Client.getCountByType({
          type: "internal",
          ...filter
        })
      ]).catch(e => {
        console.log("error:" + e);
      });

      const [data, { count }] = allData;

      let newdata = rebuildList(
        data.list,
        "tokenId",
        "callValue",
        "valueInfoList"
      );
      transactions = newdata;
      total = count || data.total;
      rangeTotal = data.rangeTotal;
    }

    this.setState({
      transactions,
      total,
      rangeTotal,
      loading: false
    });
  };

  customizedColumn = () => {
    let { intl, isinternal = false } = this.props;
    let column = [
      {
        title: upperFirst(intl.formatMessage({ id: "hash" })),
        dataIndex: "hash",
        key: "hash",
        align: "left",
        className: "ant_table",
        render: (text, record, index) => {
          return (
            <Truncate>
              <TransactionHashLink hash={text}>{text}</TransactionHashLink>
            </Truncate>
          );
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "status" })),
        dataIndex: "confirmed",
        key: "confirmed",
        align: "left",
        className: "ant_table",
        width: "15%",
        render: (text, record, index) => {
          return text ? (
            <span>
              <img
                style={{ width: "20px", height: "20px" }}
                src={require("../../images/contract/Verified.png")}
              />{" "}
              {tu("full_node_version_confirmed")}
            </span>
          ) : (
            <span>
              <img
                style={{ width: "20px", height: "20px" }}
                src={require("../../images/contract/Unverified.png")}
              />{" "}
              {tu("full_node_version_unconfirmed")}
            </span>
          );
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "age" })),
        dataIndex: "timestamp",
        key: "timestamp",
        align: "left",
        className: "ant_table",
        width: "14%",
        render: (text, record, index) => {
          return <BlockTime time={text}></BlockTime>;
          // <TimeAgo date={text} title={moment(text).format("MMM-DD-YYYY HH:mm:ss A")}/>
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "contract_type" })),
        dataIndex: "contractType",
        key: "contractType",
        align: "right",
        width: "20%",
        className: "ant_table _text_nowrap",
        render: (text, record, index) => {
          return <span>{ContractTypes[text]}</span>;
        }
      }
      // {
      //     title: upperFirst(intl.formatMessage({id: 'status'})),
      //     dataIndex: 'confirmed',
      //     key: 'confirmed',
      //     align: 'center',
      //     className: 'ant_table',
      //     render: (text, record, index) => {
      //         return record.confirmed?
      //             <span className="badge badge-success text-uppercase">{intl.formatMessage({id:'Confirmed'})}</span> :
      //             <span className="badge badge-danger text-uppercase">{intl.formatMessage({id: 'Unconfirmed'})}</span>
      //     },
      // }
    ];
    return column;
  };

  changeType() {
    let { timeType } = this.state;

    this.setState({
        timeType: !timeType
    });
}

  trc20CustomizedColumn = (activeLanguage) => {
    let { intl } = this.props;
    const {timeType} = this.state;
    const statusAry = [
      { text:  upperFirst(intl.formatMessage({id: 'address_account_table_filter_all'})), value: '0' },
      { text:  upperFirst(intl.formatMessage({id: 'full_node_version_unconfirmed'})), value: '1' },
      { text:  upperFirst(intl.formatMessage({id: 'full_node_version_confirmed'})), value: '2' },
      // { text:  upperFirst(intl.formatMessage({id: 'block_detail_rolled_back'})), value: '3' },
    ]
    const resultAry = [
        { text:  upperFirst(intl.formatMessage({id: 'address_account_table_filter_all'})), value: '0' },
        { text:  'SUCCESS', value: '1' },
        { text:  'FAIL', value: '2' },
    ]
    let column = [
      {
        title: upperFirst(intl.formatMessage({ id: "parenthash" })),
        dataIndex: "hash",
        key: "hash",
        align: "left",
        className: "ant_table",
        render: (text, record, index) => {
          return (
            <Truncate>
              <TransactionHashLink hash={text}>{text}</TransactionHashLink>
            </Truncate>
          );
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "block" })),
        dataIndex: "block",
        key: "block",
        align: "left",
        className: "ant_table",
        width: "10%",
        render: (text, record, index) => {
          return <BlockNumberLink number={record.block} />;
        }
      },
      {
        title: (
          <span
              className="token-change-type"
              onClick={this.changeType.bind(this)}
          >
              {upperFirst(
              intl.formatMessage({
                  id: timeType ? "age" : "trc20_cur_order_header_order_time"
              })
              )}
              <Icon
              type="retweet"
              style={{
                  verticalAlign: 0,
                  marginLeft: 10
              }}
              />
          </span>
        ),
        dataIndex: "timestamp",
        key: "timestamp",
        align: "left",
        className: "ant_table",
        width: "14%",
        render: (text, record, index) => {
          return(
              <div>
                  {timeType ? (
                  <BlockTime time={Number(record.timestamp)}> </BlockTime>
                  ) : (
                  <span className="">
                      <FormattedDate value={record.timestamp} /> &nbsp;
                      <FormattedTime
                      value={record.timestamp}
                      hour="numeric"
                      minute="numeric"
                      second="numeric"
                      hour12={false}
                      />
                  </span>
                  )}
              </div>
          ) 
        }
       
      },
      {
        title: upperFirst(intl.formatMessage({ id: "from" })),
        dataIndex: "from",
        key: "from",
        align: "left",
        className: "ant_table",
        render: (text, record, index) => {
          return <AddressLink address={text}>{text}</AddressLink>;
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "to" })),
        dataIndex: "to",
        key: "to",
        align: "left",
        className: "ant_table",
        render: (text, record, index) => {
          return <AddressLink address={text}>{text}</AddressLink>;
        }
      },
      {
        title: upperFirst(intl.formatMessage({id: 'status'})),
        dataIndex: 'status',
        key: 'status',
        align: 'left',
        width: activeLanguage ==='ru' ? '34%' :'16%',
        filters: statusAry,
        filterIcon: () => {
          return (
              <Icon type="down" style={{fontSize:12,color:'#666'}}  theme="outlined" />
          );
        },
        className: 'ant_table',
        render: (text, record, index) => {
            return (
                <span>
                     {
                        record.confirmed ?
                            <span  className="d-flex"><img style={{ width: "20px", height: "20px" }} src={require("../../images/contract/Verified.png")}/> <span>{tu('full_node_version_confirmed')}</span></span>
                              : 
                            <span  className="d-flex"><img style={{ width: "20px", height: "20px" }} src={require("../../images/contract/Unverified.png")}/> <span>{tu('full_node_version_unconfirmed')}</span></span>
                    }
                </span>
            )
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "result" })),
        dataIndex: "rejected",
        key: "rejected",
        align: "left",
        filters: resultAry,
        filterIcon: () => {
          return (
              <Icon type="down" style={{fontSize:12,color:'#666'}}  theme="outlined" />
          );
        },
        className: "ant_table _text_nowrap",
        render: (text, record, index) => {
          return <span>{text ? "FAIL" : "SUCCESS"}</span>;
        }
      },
      {
        title: upperFirst(intl.formatMessage({ id: "amount" })),
        dataIndex: "valueInfoList",
        key: "valueInfoList",
        align: "right",
        className: "ant_table _text_nowrap",
        render: (text, record, index) => {
          return record.valueInfoList.length
            ? record.valueInfoList.map((item, index) => {
                return (
                  <span key={index}>
                    <NameWithId value={item} />
                    <span
                      className={
                        index == record.valueInfoList.length - 1 ? "d-none" : ""
                      }
                    >
                      ,{" "}
                    </span>
                  </span>
                );
              })
            : "-";
        }
      },
      {
      title: 
        upperFirst(
            intl.formatMessage({
                id: "tokens"
            })
        ),
        dataIndex: "tokens",
        align: "left",
        key: "tokens",
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filterIcon: () => {
          return (
              <Icon type="down" style={{fontSize:12,color:'#666'}}  theme="outlined" />
          );
        },
        className: "ant_table",
        render: (text, record, index) => {
            return <span> {record.map_token_name_abbr} </span>;
        }
    }
      // {
      //   title: upperFirst(intl.formatMessage({id: 'contract_type'})),
      //   dataIndex: 'contractType',
      //   key: 'contractType',
      //   align: 'right',
      //   width: '20%',
      //   className: 'ant_table _text_nowrap',
      //   render: (text, record, index) => {
      //     return <span>{ContractTypes[text]}</span>
      //   }
      // },
    ];
    return column;
  };

  onDateOk(start, end) {
    this.start = start.valueOf();
    this.end = end.valueOf();
    this.loadTransactions();
  }

  render() {
    let {
      transactions,
      total,
      rangeTotal,
      loading,
      EmptyState = null
    } = this.state;
    let {
      intl,
      isinternal,
      isBlock = false,
      address = false,
      activeLanguage,
      filter
    } = this.props;
    let column = !isinternal
      ? this.customizedColumn()
      : this.trc20CustomizedColumn(activeLanguage);
    let tableInfo =
      intl.formatMessage({ id: "view_total" }) +
      " " +
      total +
      " " +
      intl.formatMessage({ id: "transactions_unit" });

    // if (!loading && transactions && transactions.length === 0) {
    //   if (!EmptyState) {
    //     return (
    //         <div className="p-3 text-center no-data">{tu("no_transactions")}</div>
    //     );
    //   }
    //   return <EmptyState/>;
    // }

    return (
      <div className={"token_black mt-5"} >
        {loading && (
          <div className="loading-style">
            <TronLoader />
          </div>
        )}

        {/* <div
          className="d-flex justify-content-between w-100"
          style={{ position: "absolute", left: 0, top: "-28px" }}
        >
          {total && filter.address && isinternal ? (
            <div className="d-flex align-items-center">
              <i
                class="fas fa-exclamation-circle mr-2"
                style={{ color: "#999999" }}
              ></i>
              <span className="flex-1" style={{ width: "700px" }}>
                {tu("interTrx_tip_contract")}
              </span>
            </div>
          ) : (
            ""
          )}
         
        </div> */}
        <div style={{marginBottom:'20px'}}>
            {!isBlock ? (
              <DateSelect
                onDateOk={(start, end) => this.onDateOk(start, end)}
                dataStyle={{ marginTop: "-1.6rem" }}
              />
            ) : (
              ""
            )}
          </div>
        <div>
          {!loading && (
            <TotalInfo
              total={total}
              isQuestionMark={false}
              rangeTotal={rangeTotal}
              typeText={
                filter.address && isinternal
                  ? "inter_contract_unit"
                  : "transactions_unit"
              }
              common={!address}
              top={!filter.address ? "-28px" : "10px"}
              isInternal={true}
              selected
            />
          )}
        </div>
       
        {!loading && transactions.length === 0 ? (
          <div className="p-3 text-center no-data">{tu("no_transactions")}</div>
        ) : (
          <SmartTable
            bordered={true}
            position="bottom"
            loading={loading}
            column={column}
            data={transactions}
            total={rangeTotal > 2000 ? 2000 : rangeTotal}
            onPageChange={(page, pageSize) => {
              this.loadTransactions(page, pageSize);
            }}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeLanguage: state.app.activeLanguage,
  };
}

export default connect(mapStateToProps)(injectIntl(Transactions));

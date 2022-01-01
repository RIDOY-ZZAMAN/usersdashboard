import React from 'react';
import Header from './Header/Header';
import LeftColunm from './LeftColunm/LeftColunm';
import RightColumn from './RightColumn/RightColumn';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div class="row" style={{ margin: 0 }}>
                    <div class="col-lg-2" style={{ padding: 0 }} >
                        <LeftColunm></LeftColunm>
                    </div>
                    <div class="col-lg-10 rightColumn" style={{ padding: '10px' }}>
                        <RightColumn></RightColumn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
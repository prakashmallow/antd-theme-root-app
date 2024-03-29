import { Spin } from "antd";

const { lazy } = require("react");

const ServicesComponent = lazy(() => import('services/pages/index'), { ssr: false, loading: () => <Spin />});

const Services = () => 
<ServicesComponent />;

export default Services;
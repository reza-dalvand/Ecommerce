import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CommentBox from "../CommentBox";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        style={{ display: "flex", justifyContent: "center" }}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ویژگی ها" {...a11yProps(0)} />
          <Tab label="توضیحات" {...a11yProps(1)} />
          <Tab label="کامنت ها" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ mt: 1 }} style={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: 1 }} variant="h6">
            وزن :
          </Typography>
          <Typography> 1.5 کیلوگرم </Typography>
        </Box>
        <Box sx={{ mt: 1 }} style={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: 1 }} variant="h6">
            سایز :
          </Typography>
          <Typography> 10 * 10 *15 سانتیمتر </Typography>
        </Box>
        <Box sx={{ mt: 1 }} style={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: 1 }} variant="h6">
            جنس :
          </Typography>
          <Typography>60% کتان 40٪ دیگر الیاف</Typography>
        </Box>
        <Box sx={{ mt: 1 }} style={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: 1 }} variant="h6">
            توضیح :‌
          </Typography>
          <Typography>این کالا با مرغول ترین نوع پارچه ساته شده</Typography>
        </Box>
      </TabPanel>
      <TabPanel style={{ padding: 5 }} value={value} index={1}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CommentBox />
      </TabPanel>
    </Box>
  );
}

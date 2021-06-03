import logo from "./logo.svg";
import "./App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function App() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Eyad Belbeisi</h3>
        <h4 className="vertical-timeline-element-subtitle">Amman-Jordan</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021 - now"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Coded Student</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Full Stack Developer
        </h4>
        <p>It World i am coming</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - 2021"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Corona Time</h3>
        <h4 className="vertical-timeline-element-subtitle">Welcome home </h4>
        <p>Games & Movies addict </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - 2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Co-Owner </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Sakeya International Trading
        </h4>
        <p>Automotive Oil distribution for Japanese oil </p>
        <p>Manged oil asles accounting and forecaasting </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014 -2019"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Universty</h3>
        <h4 className="vertical-timeline-element-subtitle">Certifcation </h4>
        <p>Business Adminstration</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2000 - 2014"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Education</h3>
        <h4 className="vertical-timeline-element-subtitle">School</h4>
        <p>nice old days</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="January 1996"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">The Day i was born</h3>
        <h4 className="vertical-timeline-element-subtitle">My Birthday</h4>
        <p>Hello World</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      />
    </VerticalTimeline>
  );
}

export default App;

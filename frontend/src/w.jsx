import React from "react";
import { Card, Col, Row, Icon } from "antd";
import {
  CheckCircleOutlined,
  DatabaseOutlined,
  MobileOutlined,
  ApiOutlined,
} from "@ant-design/icons";

const projects = [
  {
    title: "E-commerce Platform Development",
    description:
      "Developed a comprehensive e-commerce platform with features like product catalog, shopping cart, secure ordering system, user accounts, and administration.",
    technologies: "React, Node.js, MongoDB, Material Design",
    icon: <DatabaseOutlined style={{ fontSize: "24px", color: "#08c" }} />,
    emoji: "🛒",
  },
  {
    title: "Fitness Application",
    description:
      "Created an online store and user calorie intake tracking system.",
    technologies: "React, Node.js, MongoDB, Material Design",
    icon: <MobileOutlined style={{ fontSize: "24px", color: "#08c" }} />,
    emoji: "💪",
  },
  {
    title: "Mobile Expense Tracker Application",
    description: "Developed a mobile app for managing invoices and quotes.",
    technologies: "React Native, Node.js, MongoDB, Ant Design",
    icon: <MobileOutlined style={{ fontSize: "24px", color: "#08c" }} />,
    emoji: "📱",
  },
  {
    title: "API Call Visualization Application",
    description:
      "Built an application for real-time visualization of API calls.",
    technologies: "React, Material-UI, Flask, MySQL",
    icon: <ApiOutlined style={{ fontSize: "24px", color: "#08c" }} />,
    emoji: "🔍",
  },
  {
    title: "AI-Powered HR Management System",
    description:
      "Developed an HR management application with a candidate-job matching system during internship at Vivia Clinical Network.",
    technologies: "React, Express.js, MySQL, spaCy, scikit-learn",
    icon: <CheckCircleOutlined style={{ fontSize: "24px", color: "#08c" }} />,
    emoji: "🧠",
  },
  {
    title: "Workplace Hazard Detection System",
    description:
      "Contributed to the development of an AI system designed to detect and report workplace hazards during internship at Solyntek.",
    technologies: "FastAPI, MySQL",
    icon: <CheckCircleOutlined style={{ fontSize: "24px", color: "#08c" }} />,
    emoji: "⚠️",
  },
];

const ProjectOverview = () => {
  return (
    <div style={{ padding: "30px" }}>
      <Row gutter={16}>
        {projects.map((project, index) => (
          <Col span={8} key={index} style={{ marginBottom: "20px" }}>
            <Card
              title={
                <span>
                  {project.icon} {project.title} {project.emoji}
                </span>
              }
              bordered={true}
            >
              <p>{project.description}</p>
              <p>
                <b>Technologies Used:</b> {project.technologies}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectOverview;

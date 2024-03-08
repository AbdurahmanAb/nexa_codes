import processOne from "../assets/process/process_1.svg";
import processTwo from "../assets/process/process_2.svg";
import processThree from "../assets/process/process_3.svg";
import processFour from "../assets/process/process_4.svg";
import processFive from "../assets/process/process_5.svg";
import processSix from "../assets/process/process_6.svg";
import processSeven from "../assets/process/process_7.svg";
import processEight from "../assets/process/process_8.svg";

export type processType = {
  step: string;
  icon: any;
  title: string;
  description1: string;
  description2: string;
};

const processes: processType[] = [
  {
    step: "1",
    icon: processOne,
    title: "상담신청",
    description1: "프로젝트 정보와 함께 문의를 남겨주시면",
    description2: "담당 매니저가 72시간 이내에 연락 드립니다",
  },
  {
    step: "2",
    icon: processTwo,
    title: "미팅",
    description1: "남겨주신 내용을 바탕으로 온/오프라인 미팅을 진행합니다",
    description2: "프로젝트의 일정, 예산, 범위 등을 이야기합니다",
  },
  {
    step: "3",
    icon: processThree,
    title: "계약 및 킥오프",
    description1: "계약 성사 이후, 진행할 프로젝트에 대해",
    description2: "상세 일정을 안내드리고 기획을 시작합니다",
  },
  {
    step: "4",
    icon: processFour,
    title: "기획/스토리보드 작성",
    description1: "상세 기획을 확정하고, 개발에 활용할 스토리보드를 작성합니다",
    description2: "클라이언트 컨펌 후 개발에 착수합니다",
  },
  {
    step: "5",
    icon: processFive,
    title: "디자인",
    description1: "직관적인 UI/UX 설계 및 디자인을 진행합니다",
    description2: "클라이언트 컨펌까지 2-3회 수정을 진행합니다",
  },
  {
    step: "6",
    icon: processSix,
    title: "개발 착수",
    description1: "본 개발을 진행합니다",
    description2: "단계별로 클라이언트 컨펌을 받습니다다",
  },
  {
    step: "7",
    icon: processSeven,
    title: "QA",
    description1: "클라이언트를 대상으로 QA(검수)를 진행합니다",
    description2: "약 5일 - 7일 정도 소요됩니다",
  },
  {
    step: "8",
    icon: processEight,
    title: "A/S",
    description1: "프로젝트 종료 후 3개월 간 하자보수를 진행합니다",
    description2: "문의 접수 후 최대한 빠른 대응으로 불편함을 처리합니다",
  },
];

export default processes;

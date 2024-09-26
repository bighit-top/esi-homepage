import { ServiceMainDetailContent } from "./contents/ServiceMainDetailContent";
import { ServiceMaintenanceDetailContent } from "./contents/ServiceMaintenanceDetailContent";
import { ServicePerformanceDetailContent } from "./contents/ServicePerformanceDetailContent";
import { ServiceConsignmentDetailContent } from "./contents/ServiceConsignmentDetailContent";
import { ServiceConstructionDetailContent } from "./contents/ServiceConstructionDetailContent";
import { ServiceEtcDetailContent } from "./contents/ServiceEtcDetailContent";

export const ServiceDetailPage: React.FC<{ title: string }> = (props) => {

    let content: JSX.Element

    switch (props.title) {
        case "주요업무":
            content = <ServiceMainDetailContent />
            break;
        case "성능점검":
            content = <ServicePerformanceDetailContent />
            break;
        case "유지관리점검":
            content = <ServiceMaintenanceDetailContent />;
            break;
        case "유지관리자업무위탁":
            content = <ServiceConsignmentDetailContent />
            break;
        case "기계설비공사":
            content = <ServiceConstructionDetailContent />
            break;
        case "부수서비스":
            content = <ServiceEtcDetailContent />
            break;
        default:
            content = <ServiceMainDetailContent />
            break;
    }

    return (
        <>
            <div className="w-full text-2xl font-extrabold max-md:max-w-full">
                {props.title}
                {/* 건축물 기계설비 성능 점검 */}
            </div>
            <div>
                {content}
            </div>
        </>
    );
}
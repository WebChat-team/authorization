import SiteError from "@/entities/NotFound";

export default function NotFound() {
    return (
        <SiteError
            statusCode={404}
            title="К сожалению, страница не найдена"
            description="
                Вы можете перейти на необходимую страницу через 
                навигацию в правом верхнем углу
            "
        />
    );
}
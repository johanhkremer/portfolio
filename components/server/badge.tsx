
interface BadgeProps {
    text: string;
}

const Badge = ({ text }: BadgeProps) => {
    return (
        <span className="inline-flex items-center px-4 py-0.5 rounded-full bg-primary-200 text-background-100">
            {text}
        </span>
    );
};

export default Badge;
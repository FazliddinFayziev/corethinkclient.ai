export interface UseCaseCardProps {
    item: {
        title: string;
        desc: string;
        image: string;
    };
    icon: React.ReactNode;
    mode: boolean;
};

export interface CardCategoryProps {
    mode: boolean;
    activeTab: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}
export interface ApiResult {
    Global: Summary;
    Countries: CountrySummary[];
}

export interface Summary {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
}

export interface CountrySummary extends Summary {
    Country: string;
    CountryCode: string;
    Slug: string;
    Date: Date;
}
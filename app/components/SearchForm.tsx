import Form from "next/form";
import SearchFormReset from "@/app/components/SearchFormReset";

export default function SearchForm({ query } : { query?: string }) {

    return (
        <Form action="/" scroll={false} className={"search-form"}>
            <input name={"query"} defaultValue={""} className={"search-input"} placeholder={"Search Startup"}/>

            <div className={"flex gap-2"}>
                {query && <SearchFormReset />}

                <button type={"submit"} className={"search-btn text-white"}>
                    S
                </button>
            </div>
        </Form>
    )
}
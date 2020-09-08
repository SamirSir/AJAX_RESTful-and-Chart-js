class ChartController < ApplicationController


    def chart
        @grades = Grade.all
        @abc = Grade.all.pluck("created_at, students").to_h
        @students = Grade.all.pluck("students")
        grade_std = Grade.all.pluck("name, students")
        # @std_hash = students.to_h
        @std_hash = Hash[*grade_std.flatten]

        @girls_boys = [
            {
                name: "Boys", 
                data: [["ten", 21], ["nine", 30], ["eight", 20]]
            }, 
            {
                name: "Girls",
                data: [["ten", 41], ["nine", 20], ["eight", 50]]
            }
        ]

        @data = [
            {
                name: "Fantasy & Sci Fi", 
                data: [["2010", 10], ["2015", 30], ["2020", 16], ["2025", 25], ["2030", 28]]
            },
            {
                name: "Romance", 
                data: [["2010", 24], ["2015", 23], ["2020", 22], ["2025", 20], ["2030", 19]]
            },
            {
                name: "Mystery/Crime", 
                data: [["2010", 15], ["2015", 22], ["2020", 35], ["2025", 31], ["2030", 29]]
            }
        ]

        @worldcup = Worldcup.all
        @wcup_title = Worldcup.all.pluck("won")
        @most_title_won = @wcup_title.max
        @most_wc_winner = Worldcup.find_by_won(@most_title_won).country

        # for geo chart
        @worldcup_geo = Worldcup.all.pluck("country, won").to_h

        # Visit model
        @visits = Visit.all

    end


end

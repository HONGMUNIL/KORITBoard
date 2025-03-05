package com.korit.boardback.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReqBoardListSearchDto {
    private int page;
    private int limitCount;
    private String order;
    private String searchText;
}

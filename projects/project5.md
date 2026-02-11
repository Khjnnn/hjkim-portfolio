# 베이체크 - 티켓 거래 BI 대시보드

TicketBay 티켓 거래 플랫폼의 매물 현황을 실시간 조회하고, 일별 추이를 분석하는 BI 대시보드

## 프로젝트 개요
- **목적**: 티켓 거래 매물 수와 최저가를 일별로 추적하여 시세 변동 파악
- **플랫폼**: 웹 기반 BI 대시보드 (반응형)
- **배포**: Vercel Serverless

## 링크 URL
Vercel 배포 완료 - 운영 중

## 주요 기능
- TicketBay API 기반 3단계 카테고리 실시간 네비게이션
- 카테고리별 매물 수(TotalCount), 최저가, 최고가 실시간 조회
- 일별 매물 수 & 최저가 추이 복합 차트 (DB 히스토리 + 실시간 데이터)
- 좌석 등급별 매물 수(bar) + 최저가(line) 현황 차트
- 매일 18시(KST) 자동 데이터 수집 (Vercel Cron Job)
- 매물 100개 이상 카테고리만 대상, 카테고리당 최대 15일치 데이터 유지

## 기술 스택
- **Backend**: Python, Flask (Vercel Serverless Functions)
- **Frontend**: HTML, Tailwind CSS, Chart.js, Lucide Icons
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel (Serverless + Cron Jobs)
- **API**: TicketBay 공개 REST API (카테고리, 상품)

## 개발 과정
1. TicketBay 공개 API 분석 및 데이터 구조 파악
2. Flask 기반 프록시 서버 및 대시보드 구현
3. Supabase PostgreSQL 스키마 설계 및 데이터 파이프라인 구축
4. Chart.js로 복합 차트(bar+line) 시각화 구현
5. Vercel Serverless 배포 및 Cron Job 자동 수집 설정
6. UTC/KST 타임존 처리 및 데이터 정합성 확보

## 학습한 점
- Vercel Serverless + Cron Jobs를 활용한 서버리스 아키텍처 구축
- Supabase REST API를 직접 호출하는 경량 DB 클라이언트 설계
- Flask 앱을 Vercel 서버리스 함수로 변환하는 배포 전략
- 외부 API 프록시 패턴으로 CORS 문제 해결
- Chart.js 멀티 축 복합 차트 구현 (bar + line, 이중 Y축)

## 주요 성과
- 23개 인기 카테고리 매물 데이터 매일 자동 수집
- 카테고리별 매물 수 + 최저가 일별 추이 시각화
- Vercel 무료 플랜으로 서버 비용 없이 24시간 운영
- Supabase 무료 플랜으로 DB 비용 없이 데이터 관리

## 특징
- 실시간 TicketBay API 데이터와 DB 히스토리 데이터 결합 표시
- 두 가지 차트 디자인 차별화 (추이: 보라/청록 line, 현황: 앰버/빨강 bar+line)
- 카테고리당 데이터 15개 자동 관리로 DB 과부하 방지
- 매물 100개 이상 카테고리만 필터링하여 유의미한 데이터만 수집

## 기술적 도전 과제
- Vercel Serverless 환경에서 외부 모듈 import 제약 → 단일 파일 인라인 구조로 해결
- TicketBay API Rate Limiting → 0.5초 간격 요청 + 100개 이상만 필터링
- 타임존 이슈 (datetime.now() UTC/KST 혼동) → KST timezone-aware datetime 적용
- Vercel에서 APScheduler 사용 불가 → Vercel Cron Jobs로 대체
